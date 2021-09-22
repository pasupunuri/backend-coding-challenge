require 'pagy/extras/headers'
class API::V1::AirportsController < API::V1::BaseController
  include Pagy::Backend

  after_action { pagy_headers_merge(@pagy) if @pagy }

  def index
    cond = {country_alpha2: params[:countries]}.compact
    @pagy, @records = pagy(Airport.where(cond).order("passenger_volume DESC NULLS LAST"))
    render json: @records
  end
end
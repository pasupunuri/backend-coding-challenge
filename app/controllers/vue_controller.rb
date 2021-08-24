class VueController < ActionController::Base
  layout nil

  def index
    respond_to do |format|
      format.html
      format.any { redirect_to root_path }
    end
  end
end

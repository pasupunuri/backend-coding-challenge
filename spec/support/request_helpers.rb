RSpec.configure do |config|
  config.before(:all, type: :request) do
    host! 'api.example.com'
  end
end

module RequestHelpers
  def json_headers
    {
      'Accept' => 'application/json',
      'Content-Type' => 'application/json',
    }
  end

  def json
    return if response.body.blank?
    Oj.load(response.body, symbol_keys: true)
  end

  def json_post(url, params: {}, headers: {}, basic_auth: false, auth: false, auth_user: nil)
    post url, params: params, as: :json, headers: prepare_headers(headers, auth, auth_user, basic_auth)
  end

  def json_get(url, params: {}, headers: {}, basic_auth: false, auth: false, auth_user: nil)
    get url, params: params, headers: prepare_headers(headers, auth, auth_user, basic_auth)
  end

  def json_put(url, params: {}, headers: {}, basic_auth: false, auth: false, auth_user: nil)
    put url, params: params, as: :json, headers: prepare_headers(headers, auth, auth_user, basic_auth)
  end

  def json_delete(url, params: {}, headers: {}, basic_auth: false, auth: false, auth_user: nil)
    delete url, params: params.to_json, headers: prepare_headers(spec_headers, auth, auth_user, basic_auth)
  end

  def prepare_headers(spec_headers, auth, auth_user, basic_auth)
    headers = spec_headers.reverse_merge(json_headers)
    headers.reverse_merge!(http_login(basic_auth)) if basic_auth.present?

    headers
  end
end

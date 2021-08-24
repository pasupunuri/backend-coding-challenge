require_relative 'boot'

require 'rails'
require 'active_model/railtie'
require 'active_job/railtie'
require 'active_record/railtie'
require 'active_storage/engine'
require 'action_controller/railtie'
require 'action_mailer/railtie'
require 'action_view/railtie'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module CodeChallengeRails
  class Application < Rails::Application
    config.middleware.use Rack::Deflater
    config.load_defaults 6.0

    config.i18n.available_locales = %i[en]
    config.i18n.default_locale = :en
    config.exceptions_app = routes

    # Tell Zeitwerk to ignore the vue directory for autoloading
    Rails.autoloaders.main.ignore(Rails.root.join('app/vue'))

    # Source: https://guides.rubyonrails.org/v5.0/security.html#default-headers
    config.action_dispatch.default_headers = {
      'X-Frame-Options' => 'DENY',
      'X-XSS-Protection' => '1; mode=block',
      'X-Content-Type-Options' => 'nosniff',
    }

    config.generators do |g|
      g.test_framework :rspec
      g.fixture_replacement :factory_bot, dir: 'spec/factories'
      g.orm :active_record, primary_key_type: :uuid
    end
  end
end

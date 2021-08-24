Blueprinter.configure do |config|
  config.generator = Oj
  config.sort_fields_by = :definition
  config.datetime_format = ->(datetime) { datetime&.iso8601 }
end

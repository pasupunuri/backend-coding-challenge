require 'rails_helper'

FactoryBot.factories.map(&:name).each do |factory_name|
  describe "The #{factory_name} factory" do
    it 'is valid' do
      expect(build(factory_name)).to be_valid
    end

    it 'persists on create' do
      expect(create(factory_name)).to be_persisted
    end
  end
end

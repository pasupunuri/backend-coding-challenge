class CreateAirports < ActiveRecord::Migration[6.0]
  def change
    create_table :airports, id: :uuid do |t|
      t.integer :uid
      t.string :name, index: true
      t.string :city
      t.string :country
      t.string :country_alpha2
      t.string :iata
      t.string :icao, index: true
      t.decimal :latitude, precision: 10, scale: 6
      t.decimal :longitude, precision: 10, scale: 6
      t.integer :altitude
      t.string :timezone
      t.string :dst
      t.string :timezone_olson
      t.string :kind
      t.string :source
      t.integer :passenger_volume

      t.timestamps
    end

    add_index(:airports, %i[iata icao name])
    add_index(:airports, :iata, unique: true)
  end
end

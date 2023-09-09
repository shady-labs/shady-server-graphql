const { gql } = require("apollo-server");

module.exports = gql`
  type Album {
    name: String
    albumArt: String
    tracks: [Track]
    genre: String
  }

  type Track {
    name: String
    artists: [Artist]
    trackImage: String
    trackUrl: String
    genre: [String]
    duration: Int
  }

  type Artist {
    name: String
    image: String
    description: String
    genre: String
  }

  input AlbumInput {
    name: String
    albumArt: String
    tracks: [String]
    genre: String
  }

  input TrackInput {
    name: String
    artists: [String]
    trackImage: String
    trackUrl: String
    genre: [String]
    duration: Int
  }

  input ArtistInput {
    name: String
    image: String
    description: String
    genre: String
  }

  type Query {
    album(ID: ID!): Album!
    getAlbum(totalAlbums: Int): [Album]
    getAllAlbums: [Album]!
    getAlbumsByName(name: String, pageNumber: Int, pageSize: Int): [Track]

    track(ID: ID!): Track!
    getTracks(totalTracks: Int): [Track]
    getAllTracks: [Track]!
    getTracksByName(name: String, pageNumber: Int, pageSize: Int): [Track]

    artist(ID: ID!): Artist!
    getArtists(totalArtist: Int): [Artist]
    getAllArtists: [Artist]
    getArtistsByName(name: String, pageNumber: Int, pageSize: Int): [Artist]
  }

  type Mutation {
    addAlbum(albumInput: AlbumInput): Album!
    removeAlbum(ID: ID!): Boolean
    updateAlbum(ID: ID!, albumInput: AlbumInput): Boolean

    uploadTrack(trackInput: TrackInput): Track!
    deleteTrack(ID: ID!): Boolean
    updateTrack(ID: ID!, trackInput: TrackInput): Boolean

    addArtist(artistInput: ArtistInput): Artist!
    removeArtist(ID: ID!): Boolean
    editArtist(ID: ID!, artistInput: ArtistInput): Boolean
  }
`;

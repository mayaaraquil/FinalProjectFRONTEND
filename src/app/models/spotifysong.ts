

export interface Spotifysong {
    tracks: Track;
}

export interface Track{
    href: string;
    items: Item[];
    limit: number;
    next: string | null;
    offset: number;
    previous: string | null;
    total: number
}

export interface Item{
    album: Album;
    artists: Artists[];
    avaiable_markets: string[];
    disc_number: number;
    duration_ms: number;
    explicit: boolean;
    external_ids: ExternalId;
    external_urls: ExternalUrl;
    href: string;
    id: string;
    is_local: boolean;
    name: string;
    popularity: number;
    preview_url: string|null;
    track_number: number;
    type: string;
    uri: string; 
}

export interface Album{
    album_type: string;
    artists: Artists[];
    available_markets: string[];
    external_urls: ExternalUrl;
    href: string;
    id: string;
    images: Images[];
    name: string;
    release_date: string;
    release_date_precision: string;
    total_tracks: number;
    type: string;
    uri: string;
    
}

export interface Artists{
    external_urls: ExternalUrl;
    href: string;
    id: string;
    name: string;
    type: string;
    uri: string;

}

export interface ExternalId{
    isrc: string;
}

export interface ExternalUrl{
    spotify: string;
}

export interface Images{
    height: number;
    url: string;
    width: number;
}
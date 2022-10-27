export interface Nav {
    key? : string,
    path? : string,
    title : string,
    icon : JSX.Element,
    submenu? : Nav[],
}

export interface ServerResponse {
    value : string,
    area_with_type : string,
    country : string,
    country_iso_code : string,
    region : string,
    region_iso_code : string,
    region_with_type : string,
    suggestions : object,
}

export interface IAddressItem {
    value : string,
}
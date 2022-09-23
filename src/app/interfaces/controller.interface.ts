const enum IHttpType {
    HTTP_GET = 'HTTP_GET',
    HTTP_POST = 'HTTP_POST',
    HTTP_PUT = 'HTTP_PUT',
    HTTP_DELETE = 'HTTP_DELETE',
}

const enum IResponseType {
    HTTP_2XX = 'HTTP_2XX',
    HTTP_3XX = 'HTTP_3XX',
    HTTP_4XX = 'HTTP_4XX',
    HTTP_5XX = 'HTTP_5XX',
    HTTP_RANDOM = 'HTTP_RANDOM',
}

interface IEndpoints {
    url: string;
    http_type: IHttpType,
    response_type: IResponseType,
    data: string,
}

export { IEndpoints, IHttpType, IResponseType };
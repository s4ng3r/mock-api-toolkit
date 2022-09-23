import { IEndpoints, IHttpType, IResponseType } from "../interfaces/controller.interface";

export const ENDPOINTS : IEndpoints[] = [
    {
        url: '/get',
        http_type: IHttpType.HTTP_GET,
        response_type: IResponseType.HTTP_2XX,
        data: '{}',
    },
    {
        url: '/post',
        http_type: IHttpType.HTTP_GET,
        response_type: IResponseType.HTTP_2XX,
        data: '{}',
    },
    {
        url: '/put',
        http_type: IHttpType.HTTP_GET,
        response_type: IResponseType.HTTP_2XX,
        data: '{}',
    },
    {
        url: '/delete',
        http_type: IHttpType.HTTP_GET,
        response_type: IResponseType.HTTP_2XX,
        data: '{}',
    }

];
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class HttpHeadersInterceptor implements HttpInterceptor {
    constructor() { }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        req = req.clone({
            setHeaders: {
                "X-RapidAPI-Host": "rawg-video-games-database.p.rapidapi.com",
                "X-RapidAPI-Key": "8601487d36mshdf25d47b0024e73p13365fjsnecc66fa8bb96"
            },
            setParams: {
                key: "bc2ad58a9f8f43d6ab86af1d2bdd7c2a"
            }
        });
        return next.handle(req)
    }

}

// auth.interceptor.ts

import { Injectable } from '@angular/core';
import {
    HttpInterceptor,
    HttpRequest,
    HttpHandler,
    HttpEvent,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private authService: AuthService) { }

    intercept(
        req: HttpRequest<any>,
        next: HttpHandler,
    ): Observable<HttpEvent<any>> {
        const authData = this.authService.getAuthData();

        if (authData.token && !authData.isExpired) {
            const clonedReq = req.clone({
                setHeaders: {
                    Authorization: `Bearer ${authData.token}`,
                },
            });
            return next.handle(clonedReq);
        } else {
            return next.handle(req);
        }
    }
}

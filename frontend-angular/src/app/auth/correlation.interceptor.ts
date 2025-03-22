import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class CorrelationInterceptor implements HttpInterceptor {
  private correlationId = uuidv4(); // generato una volta sola

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const cloned = req.clone({
      setHeaders: {
        'X-Correlation-ID': this.correlationId
      }
    });
    return next.handle(cloned);
  }
}

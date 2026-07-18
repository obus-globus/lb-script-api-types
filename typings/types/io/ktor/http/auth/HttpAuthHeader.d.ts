import type { HeaderValueEncoding } from '../../../../io/ktor/http/auth/HeaderValueEncoding.d.ts'
import type { HttpAuthHeader$Companion } from '../../../../io/ktor/http/auth/HttpAuthHeader$Companion.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class HttpAuthHeader extends Object {
    static Companion: HttpAuthHeader$Companion;
    protected constructor(authScheme: string)
    readonly authScheme: string;
    render(): string;
    render(encoding: HeaderValueEncoding): string;
    toString(): string;
}
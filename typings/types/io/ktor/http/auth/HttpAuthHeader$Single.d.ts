import type { HeaderValueEncoding } from '../../../../io/ktor/http/auth/HeaderValueEncoding.d.ts'
import type { HttpAuthHeader } from '../../../../io/ktor/http/auth/HttpAuthHeader.d.ts'
import type { HttpAuthHeader$Companion } from '../../../../io/ktor/http/auth/HttpAuthHeader$Companion.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class HttpAuthHeader$Single extends HttpAuthHeader {
    static Companion: HttpAuthHeader$Companion;
    constructor(authScheme: string, blob: string)
    readonly blob: string;
    equals(other: Object | null): boolean;
    hashCode(): number;
    render(): string;
    render(encoding: HeaderValueEncoding): string;
}
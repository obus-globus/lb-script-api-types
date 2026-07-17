import type { JavaMap } from '../../JavaMap.d.ts'
import type { Jwe } from '../../io/jsonwebtoken/Jwe.d.ts'
import type { Jws } from '../../io/jsonwebtoken/Jws.d.ts'
import type { Jwt } from '../../io/jsonwebtoken/Jwt.d.ts'
import type { JwtHandler } from '../../io/jsonwebtoken/JwtHandler.d.ts'
import type { Parser } from '../../io/jsonwebtoken/io/Parser.d.ts'
import type { InputStream } from '../../java/io/InputStream.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { CharSequence } from '../../java/lang/CharSequence.d.ts'
export interface JwtParser extends Parser<Jwt<any, Object>>, Object{
    isSigned(arg0: CharSequence): boolean;
    parse(arg0: CharSequence): Jwt<any, Object>;
    parse<T extends unknown>(arg0: CharSequence, arg1: JwtHandler<T>): T;
    parseClaimsJws(arg0: CharSequence): Jws<JavaMap<any, any>>;
    parseClaimsJwt(arg0: CharSequence): Jwt<JavaMap<any, any>, JavaMap<any, any>>;
    parseContentJws(arg0: CharSequence): Jws<number[]>;
    parseContentJwt(arg0: CharSequence): Jwt<JavaMap<any, any>, number[]>;
    parseEncryptedClaims(arg0: CharSequence): Jwe<JavaMap<any, any>>;
    parseEncryptedContent(arg0: CharSequence): Jwe<number[]>;
    parseSignedClaims(arg0: CharSequence): Jws<JavaMap<any, any>>;
    parseSignedClaims(arg0: CharSequence, arg1: InputStream): Jws<JavaMap<any, any>>;
    parseSignedClaims(arg0: CharSequence, arg1: number[]): Jws<JavaMap<any, any>>;
    parseSignedContent(arg0: CharSequence): Jws<number[]>;
    parseSignedContent(arg0: CharSequence, arg1: InputStream): Jws<number[]>;
    parseSignedContent(arg0: CharSequence, arg1: number[]): Jws<number[]>;
    parseUnsecuredClaims(arg0: CharSequence): Jwt<JavaMap<any, any>, JavaMap<any, any>>;
    parseUnsecuredContent(arg0: CharSequence): Jwt<JavaMap<any, any>, number[]>;
}
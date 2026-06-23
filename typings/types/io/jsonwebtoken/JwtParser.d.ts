import type { Jwe } from '../../io/jsonwebtoken/Jwe.d.ts'
import type { Jws } from '../../io/jsonwebtoken/Jws.d.ts'
import type { Jwt } from '../../io/jsonwebtoken/Jwt.d.ts'
import type { JwtHandler } from '../../io/jsonwebtoken/JwtHandler.d.ts'
import type { Parser } from '../../io/jsonwebtoken/io/Parser.d.ts'
import type { InputStream } from '../../java/io/InputStream.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { CharSequence } from '../../java/lang/CharSequence.d.ts'
export interface JwtParser extends Parser<Jwt<Object, Object>>, Object{
    isSigned(arg0: CharSequence): boolean;
    parse(arg0: CharSequence): Jwt<Object, Object>;
    parse<T extends Object | number | string | boolean>(arg0: CharSequence, arg1: JwtHandler<T>): T;
    parseClaimsJws(arg0: CharSequence): Jws<{ [key: string]: any }>;
    parseClaimsJwt(arg0: CharSequence): Jwt<{ [key: string]: any }, { [key: string]: any }>;
    parseContentJws(arg0: CharSequence): Jws<number[]>;
    parseContentJwt(arg0: CharSequence): Jwt<{ [key: string]: any }, number[]>;
    parseEncryptedClaims(arg0: CharSequence): Jwe<{ [key: string]: any }>;
    parseEncryptedContent(arg0: CharSequence): Jwe<number[]>;
    parseSignedClaims(arg0: CharSequence): Jws<{ [key: string]: any }>;
    parseSignedClaims(arg0: CharSequence, arg1: InputStream): Jws<{ [key: string]: any }>;
    parseSignedClaims(arg0: CharSequence, arg1: number[]): Jws<{ [key: string]: any }>;
    parseSignedContent(arg0: CharSequence): Jws<number[]>;
    parseSignedContent(arg0: CharSequence, arg1: InputStream): Jws<number[]>;
    parseSignedContent(arg0: CharSequence, arg1: number[]): Jws<number[]>;
    parseUnsecuredClaims(arg0: CharSequence): Jwt<{ [key: string]: any }, { [key: string]: any }>;
    parseUnsecuredContent(arg0: CharSequence): Jwt<{ [key: string]: any }, number[]>;
}
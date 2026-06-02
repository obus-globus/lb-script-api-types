import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../../../java/lang/Comparable.d.ts'
export interface Cookie extends Object, Comparable<Cookie>{
    domain(): string;
    isHttpOnly(): boolean;
    isSecure(): boolean;
    maxAge(): number;
    name(): string;
    path(): string;
    setDomain(arg0: string): void;
    setHttpOnly(arg0: boolean): void;
    setMaxAge(arg0: number): void;
    setPath(arg0: string): void;
    setSecure(arg0: boolean): void;
    setValue(arg0: string): void;
    setWrap(arg0: boolean): void;
    value(): string;
    wrap(): boolean;
}
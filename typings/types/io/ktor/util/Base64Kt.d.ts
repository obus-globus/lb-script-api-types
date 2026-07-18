import type { Object } from '../../../java/lang/Object.d.ts'
import type { Source } from '../../../kotlinx/io/Source.d.ts'
export class Base64Kt extends Object {
    static decodeBase64Bytes(self: string): number[];
    static decodeBase64Bytes(self: Source): Source;
    static decodeBase64String(self: string): string;
    static encodeBase64(self: number[]): string;
    static encodeBase64(self: string): string;
    static encodeBase64(self: Source): string;
}
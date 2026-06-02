import type { Object } from '../../java/lang/Object.d.ts'
import type { HexFormat$NumberHexFormat } from '../../kotlin/text/HexFormat$NumberHexFormat.d.ts'
export class HexFormat$NumberHexFormat$Builder extends Object {
    constructor()
    minLength: number;
    prefix: string;
    removeLeadingZeros: boolean;
    suffix: string;
    build(): HexFormat$NumberHexFormat;
}
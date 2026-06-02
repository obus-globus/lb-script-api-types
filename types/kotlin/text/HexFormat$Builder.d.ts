import type { Object } from '../../java/lang/Object.d.ts'
import type { Function1 } from '../../kotlin/jvm/functions/Function1.d.ts'
import type { HexFormat } from '../../kotlin/text/HexFormat.d.ts'
import type { HexFormat$BytesHexFormat$Builder } from '../../kotlin/text/HexFormat$BytesHexFormat$Builder.d.ts'
import type { HexFormat$NumberHexFormat$Builder } from '../../kotlin/text/HexFormat$NumberHexFormat$Builder.d.ts'
export class HexFormat$Builder extends Object {
    constructor()
    // private _bytes: HexFormat$BytesHexFormat$Builder | null;
    // private _number: HexFormat$NumberHexFormat$Builder | null;
    readonly bytes: HexFormat$BytesHexFormat$Builder;
    readonly number: HexFormat$NumberHexFormat$Builder;
    upperCase: boolean;
    build(): HexFormat;
    bytes(builderAction: Function1<HexFormat$BytesHexFormat$Builder, void>): void;
    number(builderAction: Function1<HexFormat$NumberHexFormat$Builder, void>): void;
}
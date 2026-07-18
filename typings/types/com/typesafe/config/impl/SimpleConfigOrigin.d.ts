import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { ConfigOrigin } from '../../../../com/typesafe/config/ConfigOrigin.d.ts'
import type { OriginType } from '../../../../com/typesafe/config/impl/OriginType.d.ts'
import type { SerializedConfigValue$SerializedField } from '../../../../com/typesafe/config/impl/SerializedConfigValue$SerializedField.d.ts'
import type { URL } from '../../../../java/net/URL.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class SimpleConfigOrigin extends Object implements ConfigOrigin {
    constructor(arg0: string, arg1: number, arg2: number, arg3: OriginType, arg4: string, arg5: string, arg6: string[])
    // private commentsOrNull: string[];
    // private description: string;
    // private endLineNumber: number;
    // private lineNumber: number;
    // private originType: OriginType;
    // private resourceOrNull: string;
    // private urlOrNull: string;
    addURL(arg0: URL): SimpleConfigOrigin;
    appendComments(arg0: string[]): SimpleConfigOrigin;
    comments(): string[];
    description(): string;
    equals(arg0: Object | null): boolean;
    filename(): string;
    hashCode(): number;
    lineNumber(): number;
    originType(): OriginType;
    prependComments(arg0: string[]): SimpleConfigOrigin;
    resource(): string;
    toFields(): JavaMap<SerializedConfigValue$SerializedField, Object>;
    toFieldsDelta(arg0: SimpleConfigOrigin): JavaMap<SerializedConfigValue$SerializedField, Object>;
    toString(): string;
    url(): URL;
    withComments(arg0: string[]): SimpleConfigOrigin;
    withLineNumber(arg0: number): SimpleConfigOrigin;
}
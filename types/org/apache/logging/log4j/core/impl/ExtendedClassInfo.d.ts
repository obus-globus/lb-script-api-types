import type { Serializable } from '../../../../../../java/io/Serializable.d.ts'
import type { StringBuilder } from '../../../../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { TextRenderer } from '../../../../../../org/apache/logging/log4j/core/pattern/TextRenderer.d.ts'
export class ExtendedClassInfo extends Object implements Serializable {
    constructor(exact: boolean, location: string, version: string)
    readonly exact: boolean;
    readonly location: string;
    readonly version: string;
    equals(obj: Object | null): boolean;
    getExact(): boolean;
    getLocation(): string;
    getVersion(): string;
    hashCode(): number;
    renderOn(output: StringBuilder, textRenderer: TextRenderer): void;
    toString(): string;
}
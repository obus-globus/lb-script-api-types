import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { JsonObject } from '../../../../../com/google/gson/JsonObject.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Background } from '../../../../../net/ccbluex/liquidbounce/integration/theme/Background.d.ts'
export class ThemeMetadata extends Record {
    constructor(id: string, name: string, version: string, authors: string[], colors: JavaMap<string, string> | null, screens: string[], overlays: string[], components: string[], fonts: string[], backgrounds: Background[], values: JsonObject[] | null)
    // private authors: string[];
    /*not mapped: */ authors(): string[];
    // private backgrounds: Background[];
    /*not mapped: */ backgrounds(): Background[];
    // private colors: JavaMap<string, string> | null;
    /*not mapped: */ colors(): JavaMap<string, string> | null;
    // private components: string[];
    /*not mapped: */ components(): string[];
    // private fonts: string[];
    /*not mapped: */ fonts(): string[];
    // private id: string;
    /*not mapped: */ id(): string;
    // private name: string;
    /*not mapped: */ name(): string;
    // private overlays: string[];
    /*not mapped: */ overlays(): string[];
    // private screens: string[];
    /*not mapped: */ screens(): string[];
    // private values: JsonObject[] | null;
    /*not mapped: */ values(): JsonObject[] | null;
    // private version: string;
    /*not mapped: */ version(): string;
    checkNotNull(): void;
    component1(): string;
    component10(): Background[];
    component11(): JsonObject[] | null;
    component2(): string;
    component3(): string;
    component4(): string[];
    component5(): JavaMap<string, string> | null;
    component6(): string[];
    component7(): string[];
    component8(): string[];
    component9(): string[];
    copy(id: string, name: string, version: string, authors: string[], colors: JavaMap<string, string> | null, screens: string[], overlays: string[], components: string[], fonts: string[], backgrounds: Background[], values: JsonObject[] | null): ThemeMetadata;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}
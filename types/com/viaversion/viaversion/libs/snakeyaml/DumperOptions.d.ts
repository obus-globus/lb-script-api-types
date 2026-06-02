import type { DumperOptions$FlowStyle } from '../../../../../com/viaversion/viaversion/libs/snakeyaml/DumperOptions$FlowStyle.d.ts'
import type { DumperOptions$LineBreak } from '../../../../../com/viaversion/viaversion/libs/snakeyaml/DumperOptions$LineBreak.d.ts'
import type { DumperOptions$NonPrintableStyle } from '../../../../../com/viaversion/viaversion/libs/snakeyaml/DumperOptions$NonPrintableStyle.d.ts'
import type { DumperOptions$ScalarStyle } from '../../../../../com/viaversion/viaversion/libs/snakeyaml/DumperOptions$ScalarStyle.d.ts'
import type { DumperOptions$Version } from '../../../../../com/viaversion/viaversion/libs/snakeyaml/DumperOptions$Version.d.ts'
import type { AnchorGenerator } from '../../../../../com/viaversion/viaversion/libs/snakeyaml/serializer/AnchorGenerator.d.ts'
import type { TimeZone } from '../../../../../java/util/TimeZone.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class DumperOptions extends Object {
    constructor()
    readonly allowReadOnlyProperties: boolean;
    readonly allowUnicode: boolean;
    readonly anchorGenerator: AnchorGenerator;
    // private bestWidth: number;
    readonly canonical: boolean;
    readonly defaultFlowStyle: DumperOptions$FlowStyle;
    // private defaultStyle: DumperOptions$ScalarStyle;
    readonly dereferenceAliases: boolean;
    readonly explicitEnd: boolean;
    readonly explicitStart: boolean;
    readonly indent: number;
    readonly indentWithIndicator: boolean;
    readonly indicatorIndent: number;
    readonly lineBreak: DumperOptions$LineBreak;
    readonly maxSimpleKeyLength: number;
    readonly nonPrintableStyle: DumperOptions$NonPrintableStyle;
    readonly prettyFlow: boolean;
    readonly processComments: boolean;
    readonly splitLines: boolean;
    readonly tags: { [key: string]: string };
    readonly timeZone: TimeZone;
    readonly version: DumperOptions$Version;
    getAnchorGenerator(): AnchorGenerator;
    getDefaultFlowStyle(): DumperOptions$FlowStyle;
    getDefaultScalarStyle(): DumperOptions$ScalarStyle;
    getIndent(): number;
    getIndentWithIndicator(): boolean;
    getIndicatorIndent(): number;
    getLineBreak(): DumperOptions$LineBreak;
    getMaxSimpleKeyLength(): number;
    getNonPrintableStyle(): DumperOptions$NonPrintableStyle;
    getSplitLines(): boolean;
    getTags(): { [key: string]: string };
    getTimeZone(): TimeZone;
    getVersion(): DumperOptions$Version;
    getWidth(): number;
    isAllowReadOnlyProperties(): boolean;
    isAllowUnicode(): boolean;
    isCanonical(): boolean;
    isDereferenceAliases(): boolean;
    isExplicitEnd(): boolean;
    isExplicitStart(): boolean;
    isPrettyFlow(): boolean;
    isProcessComments(): boolean;
    setAllowReadOnlyProperties(arg0: boolean): void;
    setAllowUnicode(arg0: boolean): void;
    setAnchorGenerator(arg0: AnchorGenerator): void;
    setCanonical(arg0: boolean): void;
    setDefaultFlowStyle(arg0: DumperOptions$FlowStyle): void;
    setDefaultScalarStyle(arg0: DumperOptions$ScalarStyle): void;
    setDereferenceAliases(arg0: boolean): void;
    setExplicitEnd(arg0: boolean): void;
    setExplicitStart(arg0: boolean): void;
    setIndent(arg0: number): void;
    setIndentWithIndicator(arg0: boolean): void;
    setIndicatorIndent(arg0: number): void;
    setLineBreak(arg0: DumperOptions$LineBreak): void;
    setMaxSimpleKeyLength(arg0: number): void;
    setNonPrintableStyle(arg0: DumperOptions$NonPrintableStyle): void;
    setPrettyFlow(arg0: boolean): void;
    setProcessComments(arg0: boolean): void;
    setSplitLines(arg0: boolean): void;
    setTags(arg0: { [key: string]: string }): void;
    setTimeZone(arg0: TimeZone): void;
    setVersion(arg0: DumperOptions$Version): void;
    setWidth(arg0: number): void;
}
import type { StringBuilder } from '../../../../../../../java/lang/StringBuilder.d.ts'
import type { Field } from '../../../../../../../java/lang/reflect/Field.d.ts'
import type { Comparator } from '../../../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { CommandLine } from '../../../../../../../org/apache/logging/log4j/core/tools/picocli/CommandLine.d.ts'
import type { CommandLine$Help$Ansi } from '../../../../../../../org/apache/logging/log4j/core/tools/picocli/CommandLine$Help$Ansi.d.ts'
import type { CommandLine$Help$Ansi$Text } from '../../../../../../../org/apache/logging/log4j/core/tools/picocli/CommandLine$Help$Ansi$Text.d.ts'
import type { CommandLine$Help$ColorScheme } from '../../../../../../../org/apache/logging/log4j/core/tools/picocli/CommandLine$Help$ColorScheme.d.ts'
import type { CommandLine$Help$IOptionRenderer } from '../../../../../../../org/apache/logging/log4j/core/tools/picocli/CommandLine$Help$IOptionRenderer.d.ts'
import type { CommandLine$Help$IParamLabelRenderer } from '../../../../../../../org/apache/logging/log4j/core/tools/picocli/CommandLine$Help$IParamLabelRenderer.d.ts'
import type { CommandLine$Help$IParameterRenderer } from '../../../../../../../org/apache/logging/log4j/core/tools/picocli/CommandLine$Help$IParameterRenderer.d.ts'
import type { CommandLine$Help$Layout } from '../../../../../../../org/apache/logging/log4j/core/tools/picocli/CommandLine$Help$Layout.d.ts'
export class CommandLine$Help extends Object {
    static createMinimalOptionRenderer(): CommandLine$Help$IOptionRenderer;
    static createMinimalParamLabelRenderer(): CommandLine$Help$IParamLabelRenderer;
    static createMinimalParameterRenderer(): CommandLine$Help$IParameterRenderer;
    static createShortOptionArityAndNameComparator(): (param0: Object) => boolean;
    static createShortOptionNameComparator(): (param0: Object) => boolean;
    static defaultColorScheme(paramansi: CommandLine$Help$Ansi): CommandLine$Help$ColorScheme;
    static join(paramansi: CommandLine$Help$Ansi, paramvalues: (Object | null)[], paramsb: StringBuilder, ...paramparams: (Object | null)[]): StringBuilder;
    static shortestFirst(): (param0: Object) => boolean;
    constructor(command: Object)
    constructor(command: Object, ansi: CommandLine$Help$Ansi)
    constructor(command: Object, colorScheme: CommandLine$Help$ColorScheme)
    abbreviateSynopsis: boolean;
    // private colorScheme: CommandLine$Help$ColorScheme;
    // private command: Object;
    commandName: string;
    // private commands: { [key: string]: CommandLine$Help };
    optionFields: Field[];
    parameterLabelRenderer: CommandLine$Help$IParamLabelRenderer;
    positionalParametersFields: Field[];
    requiredOptionMarker: string;
    separator: string;
    showDefaultValues: boolean;
    sortOptions: boolean;
    abbreviatedSynopsis(): string;
    addAllSubcommands(commands: { [key: string]: CommandLine }): CommandLine$Help;
    addSubcommand(commandName: string, command: Object): CommandLine$Help;
    ansi(): CommandLine$Help$Ansi;
    // private appendOptionSynopsis(optionText: CommandLine$Help$Ansi$Text, field: Field, optionName: string, prefix: string, suffix: string): CommandLine$Help$Ansi$Text;
    commandList(): string;
    commandListHeading(...params: Object[]): string;
    createDefaultLayout(): CommandLine$Help$Layout;
    createDefaultOptionRenderer(): CommandLine$Help$IOptionRenderer;
    createDefaultParamLabelRenderer(): CommandLine$Help$IParamLabelRenderer;
    createDefaultParameterRenderer(): CommandLine$Help$IParameterRenderer;
    customSynopsis(...params: Object[]): string;
    description(...params: Object[]): string;
    descriptionHeading(...params: Object[]): string;
    detailedSynopsis(optionSort: (param0: Object) => boolean, clusterBooleanOptions: boolean): string;
    detailedSynopsis(synopsisHeadingLength: number, optionSort: (param0: Object) => boolean, clusterBooleanOptions: boolean): string;
    footer(...params: Object[]): string;
    footerHeading(...params: Object[]): string;
    header(...params: Object[]): string;
    headerHeading(...params: Object[]): string;
    optionList(): string;
    optionList(layout: CommandLine$Help$Layout, optionSort: (param0: Object) => boolean, valueLabelRenderer: CommandLine$Help$IParamLabelRenderer): string;
    optionListHeading(...params: Object[]): string;
    parameterList(): string;
    parameterList(layout: CommandLine$Help$Layout, paramLabelRenderer: CommandLine$Help$IParamLabelRenderer): string;
    parameterListHeading(...params: Object[]): string;
    synopsis(): string;
    synopsis(synopsisHeadingLength: number): string;
    synopsisHeading(...params: Object[]): string;
    synopsisHeadingLength(): number;
}
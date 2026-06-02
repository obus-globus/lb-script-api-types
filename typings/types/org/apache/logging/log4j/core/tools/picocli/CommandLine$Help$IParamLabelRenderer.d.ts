import type { Field } from '../../../../../../../java/lang/reflect/Field.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { CommandLine$Help$Ansi } from '../../../../../../../org/apache/logging/log4j/core/tools/picocli/CommandLine$Help$Ansi.d.ts'
import type { CommandLine$Help$Ansi$IStyle } from '../../../../../../../org/apache/logging/log4j/core/tools/picocli/CommandLine$Help$Ansi$IStyle.d.ts'
import type { CommandLine$Help$Ansi$Text } from '../../../../../../../org/apache/logging/log4j/core/tools/picocli/CommandLine$Help$Ansi$Text.d.ts'
export interface CommandLine$Help$IParamLabelRenderer extends Object{
    renderParameterLabel(field: Field, ansi: CommandLine$Help$Ansi, styles: CommandLine$Help$Ansi$IStyle[]): CommandLine$Help$Ansi$Text;
    separator(): string;
}
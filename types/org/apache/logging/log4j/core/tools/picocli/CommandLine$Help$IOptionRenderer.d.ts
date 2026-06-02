import type { Field } from '../../../../../../../java/lang/reflect/Field.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { CommandLine$Help$Ansi$Text } from '../../../../../../../org/apache/logging/log4j/core/tools/picocli/CommandLine$Help$Ansi$Text.d.ts'
import type { CommandLine$Help$ColorScheme } from '../../../../../../../org/apache/logging/log4j/core/tools/picocli/CommandLine$Help$ColorScheme.d.ts'
import type { CommandLine$Help$IParamLabelRenderer } from '../../../../../../../org/apache/logging/log4j/core/tools/picocli/CommandLine$Help$IParamLabelRenderer.d.ts'
import type { CommandLine$Option } from '../../../../../../../org/apache/logging/log4j/core/tools/picocli/CommandLine$Option.d.ts'
export interface CommandLine$Help$IOptionRenderer extends Object{
    render(option: CommandLine$Option, field: Field, parameterLabelRenderer: CommandLine$Help$IParamLabelRenderer, scheme: CommandLine$Help$ColorScheme): CommandLine$Help$Ansi$Text[][];
}
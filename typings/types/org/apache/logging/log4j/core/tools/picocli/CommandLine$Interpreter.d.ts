import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Field } from '../../../../../../../java/lang/reflect/Field.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { CommandLine } from '../../../../../../../org/apache/logging/log4j/core/tools/picocli/CommandLine.d.ts'
import type { CommandLine$ITypeConverter } from '../../../../../../../org/apache/logging/log4j/core/tools/picocli/CommandLine$ITypeConverter.d.ts'
import type { CommandLine$Range } from '../../../../../../../org/apache/logging/log4j/core/tools/picocli/CommandLine$Range.d.ts'
export class CommandLine$Interpreter extends Object {
    constructor(null_: CommandLine, command: Object)
    // private command: Object;
    // private commands: { [key: string]: CommandLine };
    // private converterRegistry: Map<Class<Object>, CommandLine$ITypeConverter<Object>>;
    // private isHelpRequested: boolean;
    // private optionName2Field: { [key: string]: Field };
    // private position: number;
    // private positionalParametersFields: Field[];
    // private requiredFields: Field[];
    // private separator: string;
    // private singleCharOption2Field: { [key: string]: Field };
    // private applyOption(field: Field, annotation: Class<Object>, arity: CommandLine$Range, valueAttachedToOption: boolean, args: string[], initialized: Field[], argDescription: string): number;
    // private applyValueToSingleValuedField(field: Field, arity: CommandLine$Range, args: string[], cls: Class<Object>, initialized: Field[], argDescription: string): number;
    // private applyValuesToArrayField(field: Field, annotation: Class<Object>, arity: CommandLine$Range, args: string[], cls: Class<Object>, argDescription: string): number;
    // private applyValuesToCollectionField(field: Field, annotation: Class<Object>, arity: CommandLine$Range, args: string[], cls: Class<Object>, argDescription: string): number;
    // private applyValuesToMapField(field: Field, annotation: Class<Object>, arity: CommandLine$Range, args: string[], cls: Class<Object>, argDescription: string): number;
    // private assertNoMissingParameters(field: Field, arity: number, args: string[]): void;
    // private checkMaxArityExceeded(arity: CommandLine$Range, remainder: number, field: Field, values: string[]): void;
    // private consumeArguments(field: Field, annotation: Class<Object>, arity: CommandLine$Range, args: string[], type: Class<Object>, originalSize: number, argDescription: string): Object[];
    // private consumeMapArguments(field: Field, arity: CommandLine$Range, args: string[], classes: Class<Object>[], keyConverter: CommandLine$ITypeConverter<Object>, valueConverter: CommandLine$ITypeConverter<Object>, result: Map<Object, Object>, argDescription: string): void;
    // private consumeOneArgument(field: Field, arity: CommandLine$Range, args: string[], type: Class<Object>, result: Object[], index: number, originalSize: number, argDescription: string): number;
    // private consumeOneMapArgument(field: Field, arity: CommandLine$Range, args: string[], classes: Class<Object>[], keyConverter: CommandLine$ITypeConverter<Object>, valueConverter: CommandLine$ITypeConverter<Object>, result: Map<Object, Object>, index: number, argDescription: string): void;
    // private createCollection(collectionClass: Class<Object>): Object[];
    // private createMap(mapClass: Class<Object>): Map<Object, Object>;
    // private getTypeConverter(type: Class<Object>, field: Field): CommandLine$ITypeConverter<Object>;
    // private handleUnmatchedArguments(args: string[]): void;
    // private handleUnmatchedArguments(arg: string): void;
    // private is(f: Field, description: string, value: boolean): boolean;
    // private isAnyHelpRequested(): boolean;
    // private isOption(arg: string): boolean;
    // private optionDescription(prefix: string, field: Field, index: number): string;
    parse(...args: string[]): CommandLine[];
    // private parse(parsedCommands: CommandLine[], argumentStack: string[], originalArgs: string[]): void;
    // private processArguments(parsedCommands: CommandLine[], args: string[], required: Field[], initialized: Field[], originalArgs: string[]): void;
    // private processClusteredShortOptions(required: Field[], initialized: Field[], arg: string, args: string[]): void;
    // private processPositionalParameter(required: Field[], initialized: Field[], args: string[]): void;
    // private processRemainderAsPositionalParameters(required: Field[], initialized: Field[], args: string[]): void;
    // private processStandaloneOption(required: Field[], initialized: Field[], arg: string, args: string[], paramAttachedToKey: boolean): void;
    // private resemblesOption(arg: string): boolean;
    // private split(value: string, field: Field): string[];
    // private splitRegex(field: Field): string;
    // private trim(value: string): string;
    // private tryConvert(field: Field, index: number, converter: CommandLine$ITypeConverter<Object>, value: string, type: Class<Object>): Object;
    // private unquote(value: string): string;
    // private updateHelpRequested(field: Field): void;
}
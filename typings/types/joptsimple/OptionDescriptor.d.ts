import type { Object } from '../java/lang/Object.d.ts'
export interface OptionDescriptor extends Object{
    acceptsArguments(): boolean;
    argumentDescription(): string;
    argumentTypeIndicator(): string;
    defaultValues(): (Object | null)[];
    description(): string;
    isRequired(): boolean;
    options(): string[];
    representsNonOptions(): boolean;
    requiresArgument(): boolean;
}
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class CommandLineOptions extends Object {
    static defaultArgs(): CommandLineOptions;
    static of(paramarg0: string[]): CommandLineOptions;
    static ofArgs(paramarg0: string[]): CommandLineOptions;
    private constructor()
    readonly configs: string[];
    getConfigs(): string[];
    // private parseArgs(arg0: string[]): void;
}
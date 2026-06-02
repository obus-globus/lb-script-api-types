import type { AbstractScript } from '../../../../../../org/apache/logging/log4j/core/script/AbstractScript.d.ts'
export class Script extends AbstractScript {
    static createScript(paramname: string, paramlanguage: string, paramscriptText: string): Script;
    constructor(name: string, language: string, scriptText: string)
    toString(): string;
}
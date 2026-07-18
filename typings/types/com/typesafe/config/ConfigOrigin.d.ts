import type { URL } from '../../../java/net/URL.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface ConfigOrigin extends Object{
    comments(): string[];
    description(): string;
    filename(): string;
    lineNumber(): number;
    resource(): string;
    url(): URL;
    withComments(arg0: string[]): ConfigOrigin;
    withLineNumber(arg0: number): ConfigOrigin;
}
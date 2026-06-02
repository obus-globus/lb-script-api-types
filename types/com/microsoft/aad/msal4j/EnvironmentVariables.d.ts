import type { IEnvironmentVariables } from '../../../../com/microsoft/aad/msal4j/IEnvironmentVariables.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class EnvironmentVariables extends Object implements IEnvironmentVariables {
    constructor()
    getEnvironmentVariable(arg0: string): string;
}
import type { Environment } from '../../../com/mojang/authlib/Environment.d.ts'
import type { Optional } from '../../../java/util/Optional.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class EnvironmentParser extends Object {
    static PROP_ENV: string;
    static PROP_PROFILES_HOST: string;
    static PROP_SERVICES_HOST: string;
    static PROP_SESSION_HOST: string;
    static getEnvironmentFromProperties(): Optional<Environment>;
    static setEnvironmentOverride(paramarg0: string): void;
    constructor()
}
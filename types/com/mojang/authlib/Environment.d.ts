import type { Record } from '../../../java/lang/Record.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class Environment extends Record {
    constructor(sessionHost: string, servicesHost: string, profilesHost: string, name: string)
    // private name: string;
    // private profilesHost: string;
    // private servicesHost: string;
    // private sessionHost: string;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    name(): string;
    profilesHost(): string;
    servicesHost(): string;
    sessionHost(): string;
    toString(): string;
}
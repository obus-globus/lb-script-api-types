import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class ServerAuthMovementMode extends Enum<ServerAuthMovementMode> {
    static ClientAuthoritativeV2: ServerAuthMovementMode;
    static LegacyClientAuthoritativeV1_Deprecated: ServerAuthMovementMode;
    static ServerAuthoritativeV3: ServerAuthMovementMode;
    static getByName(paramarg0: string): ServerAuthMovementMode;
    static getByName(paramarg0: string, paramarg1: ServerAuthMovementMode): ServerAuthMovementMode;
    static getByValue(paramarg0: number): ServerAuthMovementMode;
    static getByValue(paramarg0: number, paramarg1: ServerAuthMovementMode): ServerAuthMovementMode;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): ServerAuthMovementMode;
    static values(): ServerAuthMovementMode[];
    private constructor(arg2: number)
    private constructor(arg2: ServerAuthMovementMode)
    readonly value: number;
    getValue(): number;
    name(): "LegacyClientAuthoritativeV1_Deprecated" | "ClientAuthoritativeV2" | "ServerAuthoritativeV3";
}
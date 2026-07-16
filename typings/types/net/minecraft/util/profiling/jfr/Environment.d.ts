import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
import type { MinecraftServer } from '../../../../../net/minecraft/server/MinecraftServer.d.ts'
export class Environment extends Enum<Environment> {
    static CLIENT: Environment;
    static SERVER: Environment;
    static from(paramserver: MinecraftServer): Environment;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): Environment;
    static values(): Environment[];
    private constructor(description: string)
    readonly description: string;
    getDescription(): string;
    name(): "CLIENT" | "SERVER";
}
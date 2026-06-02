import type { UUID } from '../../../../java/util/UUID.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class RealmsNotification extends Object {
    static parseList(paramjson: string): RealmsNotification[];
    private constructor(uuid: UUID, dismissable: boolean, seen: boolean, type: string)
    // private dismissable: boolean;
    // private seen: boolean;
    // private type: string;
    // private uuid: UUID;
    dismissable(): boolean;
    seen(): boolean;
    uuid(): UUID;
}
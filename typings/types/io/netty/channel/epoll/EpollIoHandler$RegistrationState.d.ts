import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class EpollIoHandler$RegistrationState extends Enum<EpollIoHandler$RegistrationState> {
    static Added: EpollIoHandler$RegistrationState;
    static Cancelled: EpollIoHandler$RegistrationState;
    static Pending: EpollIoHandler$RegistrationState;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): EpollIoHandler$RegistrationState;
    static values(): (Object | null)[];
    private constructor()
    name(): "Pending" | "Added" | "Cancelled";
}
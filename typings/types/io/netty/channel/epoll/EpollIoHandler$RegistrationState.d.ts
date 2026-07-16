import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class EpollIoHandler$RegistrationState extends Enum<EpollIoHandler$RegistrationState> {
    static Added: EpollIoHandler$RegistrationState;
    static Cancelled: EpollIoHandler$RegistrationState;
    static Pending: EpollIoHandler$RegistrationState;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): EpollIoHandler$RegistrationState;
    static values(): EpollIoHandler$RegistrationState[];
    private constructor()
    name(): "Pending" | "Added" | "Cancelled";
}
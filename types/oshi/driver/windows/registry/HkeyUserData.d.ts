import type { Object } from '../../../../java/lang/Object.d.ts'
import type { OSSession } from '../../../../oshi/software/os/OSSession.d.ts'
export class HkeyUserData extends Object {
    static queryUserSessions(): OSSession[];
    private constructor()
}
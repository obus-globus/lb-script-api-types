import type { Exception } from '../../../java/lang/Exception.d.ts'
import type { UUID } from '../../../java/util/UUID.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface ProfileLookupCallback extends Object{
    onProfileLookupFailed(arg0: string, arg1: Exception): void;
    onProfileLookupSucceeded(arg0: string, arg1: UUID): void;
}
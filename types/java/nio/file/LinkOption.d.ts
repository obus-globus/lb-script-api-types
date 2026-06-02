import type { Class } from '../../../java/lang/Class.d.ts'
import type { CopyOption } from '../../../java/nio/file/CopyOption.d.ts'
import type { OpenOption } from '../../../java/nio/file/OpenOption.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class LinkOption extends Enum<LinkOption> implements CopyOption, OpenOption {
    static NOFOLLOW_LINKS: LinkOption;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): LinkOption;
    static values(): (Object | null)[];
    private constructor()
    name(): "NOFOLLOW_LINKS";
}
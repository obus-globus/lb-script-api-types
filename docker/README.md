# Dockerized type regeneration

A reproducible container that runs the **whole** type-generation flow
(`run-regen.sh`): build the generator, launch LiquidBounce headless (Xvfb + Mesa
llvmpipe), introspect the live class graph, post-process (apply-kdoc +
fix-binding), and promote into `typings/`.

## Why a container
The flow needs a precise toolchain — **JDK 25** (run LB), **JDK 21** (build the
generator), **Xvfb + Mesa** software GL, **Python 3** — pinned and isolated from
the host. The image bakes all of it.

## Run it

```bash
# from the repo root — builds the image and runs the flow with cached volumes
docker/regen.sh                 # full flow (regen + promote)
docker/regen.sh --no-promote    # stop at tools/regen-output/ inside the volume
```

First run downloads Gradle deps + the Minecraft assets/libraries + the LB source
(several GB, slow). They persist in the named volumes, so later runs skip the
downloads — only the **~50–60 min softpipe introspection** remains.

### Volumes (the cache)
| volume | mount | holds |
|---|---|---|
| `lb-types-work` | `/work` | the cloned repo + `references/liquidbounce` + `tools/regen-output` |
| `lb-types-gradle` | `/cache/gradle` | Gradle deps + Loom's Minecraft download cache |

### Extract the result
The output lives in the `lb-types-work` volume. Copy it out with:

```bash
docker run --rm -v lb-types-work:/work -v "$PWD/out":/out \
  alpine sh -c 'cp -r /work/typings /out/'
```

## Knobs
- `REPO_URL` / `REPO_REF` — which repo/branch the container clones (default
  `obus-globus/lb-script-api-types@main`). Ignored once `/work` is populated.
- `IMAGE` — image tag to build/run (default `lb-script-api-types-regen:local`).
- Any extra args pass through to `run-regen.sh` (e.g. `--no-promote`, `--no-regen`).

## Notes
- `--shm-size=1g` is set for the GL/MC client.
- The image is published to GHCR by `.github/workflows/docker-image.yml` and used
  by the regen workflow; for local use the image builds on demand.
- For day-to-day local work you usually don't need Docker — run `./run-regen.sh`
  natively (it reuses a sibling `liquidbounce-helper` LB checkout).

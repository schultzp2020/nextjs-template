import { useState } from 'react';
import { Listbox } from '@headlessui/react';
import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';

const possibleVersions = ['2.0.0', '2.1.0', '2.2.0'];

export function VersionSelector(): JSX.Element | null {
  const router = useRouter();
  const [selectedVersion, setSelectedVersion] = useState<string>(
    possibleVersions.find((version) => router.asPath.includes(version)) ?? '2.2.0',
  );

  return (
    <Listbox as="div" value={selectedVersion} onChange={setSelectedVersion}>
      <Listbox.Label className="sr-only">Version</Listbox.Label>
      <Listbox.Button
        className="flex h-6 w-16 items-center justify-center rounded-lg text-sm font-medium text-slate-700 shadow-md shadow-black/5 ring-1 ring-black/5 dark:bg-slate-700 dark:text-slate-400 dark:ring-inset dark:ring-white/5"
        aria-label={selectedVersion}
      >
        {selectedVersion}
      </Listbox.Button>
      <Listbox.Options className="mt-3 w-24 space-y-1 rounded-xl bg-white p-3 text-sm font-medium shadow-md shadow-black/5 ring-1 ring-black/5 dark:bg-slate-800 dark:ring-white/5">
        {possibleVersions.map((version) => (
          <Listbox.Option
            key={version}
            value={version}
            className={({ active, selected }): string =>
              clsx('flex cursor-pointer select-none items-center rounded-[0.625rem] p-1', {
                'text-sky-500': selected,
                'text-slate-900 dark:text-white': active && !selected,
                'text-slate-700 dark:text-slate-400': !active && !selected,
                'bg-slate-100 dark:bg-slate-900/40': active,
              })
            }
          >
            <Link href={`/docs/${version}`} className="ml-1">
              {version}
            </Link>
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </Listbox>
  );
}

export default VersionSelector;

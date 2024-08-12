'use client'
import { Welcome } from '../../components/Welcome/Welcome';
import { ColorSchemeToggle } from '../../components/ColorSchemeToggle/ColorSchemeToggle';
import {Header} from '../../components/Header/Header';
import { Button } from '@mantine/core';
import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      <Header/>
      <Welcome />
      <>
      <h1>SUP</h1>
      </>
      <Button component={Link} href="/homepage">
          Homepage
        </Button>
    </>
  );
}

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container flex flex-col items-center justify-center gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <p className="text-center text-sm leading-loose text-muted-foreground">
          &copy; {new Date().getFullYear()} Shopline. All rights reserved.
        </p>
        <p className="text-center text-sm leading-loose text-muted-foreground">
          Made by zeke
        </p>
      </div>
    </footer>
  );
}

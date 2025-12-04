# Vodič za Deployment (GitHub + Cloudflare)

Tvoj portfolio je spreman lokalno. Prati ove korake da ga objaviš na internet.

## 1. GitHub (Slanje koda)

1.  Idi na [GitHub.com](https://github.com) i uloguj se.
2.  Klikni na **+** (gore desno) i izaberi **New repository**.
3.  **Repository name**: `portfolio`
4.  **Public/Private**: Public (da bi Cloudflare mogao besplatno da ga vidi).
5.  **Initialize this repository with**: Ostavite sve prazno (bez README, bez .gitignore).
6.  Klikni **Create repository**.
7.  Kopiraj HTTPS link (npr. `https://github.com/tvoj-user/portfolio.git`).

### U Terminalu (na tvom kompjuteru):
Otvori PowerShell ili Command Prompt i kucaj sledeće (jednu po jednu liniju):

```powershell
cd C:\Users\User\Desktop\porfolio
```

*(Zameni `TVOJ_LINK` sa onim što si kopirao sa GitHub-a)*
```powershell
git remote add origin TVOJ_LINK
```

```powershell
git branch -M main
```

```powershell
git push -u origin main
```

Ako ti traži username i password, unesi svoje GitHub podatke.

---

## 2. Cloudflare Pages (Objavljivanje)

1.  Idi na [Cloudflare Dashboard](https://dash.cloudflare.com) i uloguj se.
2.  U levom meniju klikni na **Workers & Pages**.
3.  Klikni na dugme **Create application**.
4.  Prebaci se na tab **Pages**.
5.  Klikni na **Connect to Git**.
6.  Izaberi svoj GitHub nalog i repozitorijum `portfolio`.
7.  Klikni **Begin setup**.
8.  **Build settings**:
    *   **Framework preset**: `None` (ovo je statičan HTML sajt, ne treba framework).
    *   **Build command**: (ostavi prazno).
    *   **Build output directory**: (ostavi prazno ili stavi `.`).
9.  Klikni **Save and Deploy**.

Sačekaj minut-dva i tvoj sajt će biti online na adresi poput `portfolio-luka.pages.dev`! 🚀

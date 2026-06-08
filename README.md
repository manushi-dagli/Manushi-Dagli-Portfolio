# How to Update Your Resume (No Code Change Needed)

## The System

The website always links to `resume/Manushi_Dagli.pdf`.  
To update what visitors download, just replace that one file.

## Steps

1. Export your new resume as a PDF
2. Name it exactly: `Manushi_Dagli.pdf`
3. Drop it into the `resume/` folder (overwrite the old file)
4. That's it — the website already points to it

## If hosted on GitHub Pages

```bash
# From the ManushiDagliPortfolio folder:
git add resume/Manushi_Dagli.pdf
git commit -m "update resume"
git push
```

No HTML, CSS, or JS changes required. Ever.

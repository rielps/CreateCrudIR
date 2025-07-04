import type React from "react"

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div style={{ backgroundColor: "#FFF7DF", minHeight: "100vh" }}>
      {/* Header com Logo */}
      <header
        style={{
          padding: "20px",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Group%201%20%281%29-6zJzXgNCwI32cIkX1vahdvdpmgczqj.svg"
          alt="Logo"
          style={{
            height: "80px",
            width: "auto",
          }}
        />
      </header>

      {/* Banner - Largura total da tela */}
      <div
        style={{
          width: "100vw", // 100% da viewport width
          marginLeft: "calc(-50vw + 50%)", // Centraliza e expande para as bordas
          marginBottom: "40px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Group%204-RAuntiK4sBiL5YlWuAC6QBFCiDmPOS.svg"
          alt="Banner"
          style={{
            width: "100%",
            height: "auto",
            display: "block",
          }}
        />
      </div>

      {/* Conteúdo Principal */}
      <main>{children}</main>
    </div>
  )
}

export default Layout

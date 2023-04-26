import Link from "next/link";

export default function Create () {
    return (
        <div style={{
            backgroundColor: "#fff",
            color: "#000",
            height: "auto"
        }}>
            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}>
                <h1>Create from...</h1>
            </div>
            <div>
                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: 100
                }}>
                    <h2>Google</h2>
                </div>
                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: 100
                }}>
                    <h2>Meta</h2>
                </div>
                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: 30
                }}>
                    <h2>Apple ID</h2>
                </div>
                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: 160
                }}>
                    <button style={{
                        backgroundColor: "#000",
                        color: "#fff",
                        width: 200,
                        height: 50,
                        borderRadius: 10,
                    }}>
                        <h2>Create Account</h2>
                    </button>
                </div>
                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: 50
                }}>
                    <Link href={""}>
                        create mail address
                    </Link>
                </div>
                <span style={{ margin: 20 }}> </span>
            </div>
        </div>
    )
};
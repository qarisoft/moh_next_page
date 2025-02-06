"use client"

import { AnimatePresence } from "motion/react"
import * as motion from "motion/react-client"
import { useEffect, useState } from "react"

export default function SharedLayoutAnimation({ data }: {
    data: { data: ChildParams, label: string, img: string }[]
}) {

    const [selectedT, setSelectedTab] = useState(0)
    const [first, setFirst] = useState(true)
    useEffect(() => {
        const a = setTimeout(() => {
            let newA = selectedT + 1
            if (newA >= data.length) {
                newA = 0
            }
            setSelectedTab(newA)
            setFirst(false)
        }, 6000)
        if (!first) {
        }

        return () => {
            clearTimeout(a)
        }

    }, [selectedT])
    const selectedTab = data[selectedT]
    const cls = "absolute p-4  right-1/4 "

    return (
        <main
            className="overflow-hidden h-full w-full relative flex items-center"
            style={{
            }}>
            <AnimatePresence mode="popLayout">
                <motion.div
                    key={selectedTab ? selectedTab.label + "1" : "empty"}
                    initial={{ y: 0, opacity: 0 }}
                    animate={{ y: 0, opacity: 0, zIndex: 12 }}
                    exit={{ x: 220, opacity: [0.9, 0.5, 0.4, 0.3, 0], zIndex: 13 }}
                    transition={{ duration: 0.6, ease: 'easeIn' }}
                    className={cls}
                >
                    <Child desc={selectedTab.data.desc} title={selectedTab.data.title} />
                </motion.div>
                <motion.div
                    key={selectedTab ? selectedTab.label + "2" : "empty"}
                    initial={{ y: first ? 0 : -20, opacity:first ? 1 : 0 }}
                    animate={{ y: 0, opacity: first ? 1 :[0, 0.5, 1], zIndex: 12 }}
                    exit={{ y: 220, opacity: [0.9, 0.8, 0.7, 0.7, 0.6, 0.1, 0], zIndex: 13 }}
                    transition={{ duration: 0.6, ease: 'easeIn' }}
                    className={cls}
                >

                    <Child desc={selectedTab.data.desc} title={selectedTab.data.title} />

                </motion.div>
                <motion.div
                    className="overflow-hidden h-full w-full absolute "
                    key={selectedTab ? selectedTab.label : "empty"}
                    initial={{ y: first ? 0: -5, opacity: 1 }}
                    animate={{ y: 0, opacity: 1, zIndex: 10 }}
                    exit={{ y: [30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 350], opacity: [1, 0.6, 0.5, 0], zIndex: 11 }}
                    transition={{ duration: 0.6, ease: 'easeInOut' }}
                >
                    <div
                        className="overflow-hidden"
                        style={{
                            height: "100%",
                            width: "100%",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundImage: `url(${selectedTab.img})`
                        }}
                    ></div>
                </motion.div>
            </AnimatePresence>
        </main>
    )
}

interface ChildParams {
    title: string
    desc: string

}
function Child({ title, desc }: ChildParams) {
    return <article dir="rtl" className="text-white text-pretty  p-2 relative max-w-[18rem]">
        <div className="absolute top-0 left-0 w-full h-full bg-slate-900 opacity-20  "
            style={{ zIndex: -1 }}
        ></div>
        {/* <div className="absolute top-0 left-0 w-full h-full  "> */}
        <h1 className="text-5xl">{title}</h1>
        <p>{desc}</p>

    </article>
}

/**
 * ==============   Styles   ================
 */


const iconContainer: React.CSSProperties = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    overflow: "hidden",
}

const icon: React.CSSProperties = {
    fontSize: 128,
    overflow: "hidden",
}

import { IProcessItem } from "../../model";
import { buildUUID } from "~@/utils/uuid";
import { LOCAL_PROCESS_LIST_KEY, ProcessType } from "@/config/global";

export default function useList() {
  const innerDivWidth = ref<string>("100%");

  const list = ref<IProcessItem[]>([]);

  const handleAddProcess = () => {
    list.value.push({
      id: buildUUID(),
      name: "新工艺",
      remark: "",
      type: ProcessType.UNIVERSAL,
      results: [],
    });
  };

  const handleCopyProcess = (item: IProcessItem) => {
    list.value.push(item);
  };

  const handleSave2Storage = () => {
    localStorage.setItem(LOCAL_PROCESS_LIST_KEY, JSON.stringify(list.value));
  };

  const handleLoadListFromLocalStorage = () => {
    const localData = localStorage.getItem(LOCAL_PROCESS_LIST_KEY);
    if (localData) {
      try {
        list.value = JSON.parse(localData);
      } catch (e) {
        console.error("从本地存储转化数据失败", e);
      }
    }
  };

  let emit: any;
  defineComponent({
    setup() {
      emit = defineEmits<{
        (e: "select", data: IProcessItem): void;
      }>();
    },
  });

  const handleSelectProcess = (item: IProcessItem) => {
    console.log("22");
    emit("select", item);
  };

  onBeforeMount(() => {
    handleLoadListFromLocalStorage();
  });

  onMounted(() => {
    // 第一次加载时，如果有数据必定会触发watch，所以可以等数据初始化结束后再生成监听
    watch(
      () => list.value,
      () => {
        handleSave2Storage();
      },
      { deep: true },
    );
  });

  return {
    innerDivWidth,
    list,
    handleAddProcess,
    handleCopyProcess,
    handleSelectProcess,
  };
}
